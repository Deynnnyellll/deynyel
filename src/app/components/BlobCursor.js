"use client"

import { useEffect, useRef } from "react"

export default function BlobCursor({
  blobType = "circle",
  fillColor = "#5227FF",
  trailCount = 3,
  sizes = [60, 60, 60],
  innerSizes = [20, 35, 25],
  innerColor = "rgba(255,255,255,0.8)",
  opacities = [0.5, 0.5, 0.5],
  shadowColor = "rgba(0, 0, 0, 0.75)",
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = "blob",
  filterStdDeviation = 30,
  filterColorMatrixValues = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10",
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  zIndex = 100,
}) {
  const svgRef   = useRef(null)
  const rafRef   = useRef(null)
  const mouse    = useRef({ x: -999, y: -999 })
  // Each blob tracks its own smoothed position
  const blobs    = useRef([])

  useEffect(() => {
    // Initialise blob state array
    blobs.current = Array.from({ length: trailCount }, () => ({
      x: -999,
      y: -999,
    }))

    // ── Easing helpers ──────────────────────────────────────────────────────
    // "power3.out" → cubic ease-out   "power1.out" → linear ease-out
    // We replicate this by choosing a lerp factor from the duration.
    // Shorter duration = snappier = higher lerp factor per frame.
    const toLerpFactor = (duration) => {
      // At 60fps a lerp factor of k means: after 1s the error is (1-k)^60
      // We want ~95% there in `duration` seconds:  (1-k)^(60*dur) = 0.05
      // k = 1 - 0.05^(1/(60*dur))
      return 1 - Math.pow(0.05, 1 / (60 * duration))
    }

    const fastLerp = toLerpFactor(fastDuration)  // ~0.39  (snappy)
    const slowLerp = toLerpFactor(slowDuration)  // ~0.095 (trailing)

    // Lerp factors per blob — first blob is fastest (cursor), rest trail behind
    const lerpFactors = Array.from({ length: trailCount }, (_, i) =>
      i === 0 ? fastLerp : slowLerp
    )

    // ── Mouse tracking ──────────────────────────────────────────────────────
    const onMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    window.addEventListener("mousemove", onMove)

    // ── Grab SVG circle / ellipse elements ──────────────────────────────────
    const svg = svgRef.current
    if (!svg) return

    const outerEls = svg.querySelectorAll(".blob-outer")
    const innerEls = svg.querySelectorAll(".blob-inner")

    // ── Animation loop ──────────────────────────────────────────────────────
    const tick = () => {
      const target = mouse.current

      blobs.current.forEach((blob, i) => {
        const src = i === 0 ? target : blobs.current[i - 1]
        const k   = lerpFactors[i]
        blob.x += (src.x - blob.x) * k
        blob.y += (src.y - blob.y) * k

        const outer = outerEls[i]
        const inner = innerEls[i]
        if (!outer || !inner) return

        if (blobType === "circle") {
          outer.setAttribute("cx", blob.x)
          outer.setAttribute("cy", blob.y)
          inner.setAttribute("cx", blob.x)
          inner.setAttribute("cy", blob.y)
        } else {
          // ellipse — same but separate rx/ry could be extended later
          outer.setAttribute("cx", blob.x)
          outer.setAttribute("cy", blob.y)
          inner.setAttribute("cx", blob.x)
          inner.setAttribute("cy", blob.y)
        }
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [
    trailCount, fastDuration, slowDuration, blobType,
  ])

  // ── Render SVG ──────────────────────────────────────────────────────────────
  const Tag = blobType === "circle" ? "circle" : "ellipse"

  return (
    <svg
      ref={svgRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex,
        overflow: "visible",
      }}
    >
      <defs>
        {useFilter && (
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={filterStdDeviation} result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values={filterColorMatrixValues}
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        )}
      </defs>

      {/* Outer blobs grouped so the goo filter merges them together */}
      <g filter={useFilter ? `url(#${filterId})` : undefined}>
        {Array.from({ length: trailCount }, (_, i) => {
          const r = (sizes[i] ?? sizes[sizes.length - 1]) / 2
          return (
            <Tag
              key={`outer-${i}`}
              className="blob-outer"
              cx={-999}
              cy={-999}
              r={r}
              // ellipse attrs
              rx={blobType === "ellipse" ? r : undefined}
              ry={blobType === "ellipse" ? r * 0.6 : undefined}
              fill={fillColor}
              opacity={opacities[i] ?? opacities[opacities.length - 1]}
              style={{
                filter: `drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px ${shadowColor})`,
              }}
            />
          )
        })}
      </g>

      {/* Inner highlights — rendered above, no goo filter so they stay crisp */}
      {Array.from({ length: trailCount }, (_, i) => {
        const r = (innerSizes[i] ?? innerSizes[innerSizes.length - 1]) / 2
        return (
          <Tag
            key={`inner-${i}`}
            className="blob-inner"
            cx={-999}
            cy={-999}
            r={r}
            rx={blobType === "ellipse" ? r : undefined}
            ry={blobType === "ellipse" ? r * 0.6 : undefined}
            fill={innerColor}
            opacity={opacities[i] ?? opacities[opacities.length - 1]}
          />
        )
      })}
    </svg>
  )
}