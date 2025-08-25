import React from 'react';

interface ShapeElement {
  type: 'rocket' | 'pawn' | 'smoke';
  style: 'outline';
  strokeColor: string;
  strokeWidth: number;
  position?: {
    x: number;
    y: number;
  };
  size?: {
    width: number;
    height: number;
  };
  curves?: Array<{
    cx: number;
    cy: number;
    r: number;
  }>;
}

interface CustomBackgroundShapesProps {
  elements: ShapeElement[];
}

const CustomBackgroundShapes: React.FC<CustomBackgroundShapesProps> = ({ elements }) => {
  const renderRocket = (element: ShapeElement) => {
    if (!element.position || !element.size) return null;
    
    const { x, y } = element.position;
    const { width, height } = element.size;
    
    return (
      <g key={`rocket-${x}-${y}`}>
        {/* Rocket body */}
        <rect
          x={x + width * 0.3}
          y={y + height * 0.2}
          width={width * 0.4}
          height={height * 0.6}
          fill="none"
          stroke={element.strokeColor}
          strokeWidth={element.strokeWidth}
        />
        {/* Rocket nose */}
        <polygon
          points={`${x + width * 0.5},${y} ${x + width * 0.3},${y + height * 0.2} ${x + width * 0.7},${y + height * 0.2}`}
          fill="none"
          stroke={element.strokeColor}
          strokeWidth={element.strokeWidth}
        />
        {/* Rocket fins */}
        <polygon
          points={`${x + width * 0.3},${y + height * 0.8} ${x + width * 0.1},${y + height} ${x + width * 0.3},${y + height}`}
          fill="none"
          stroke={element.strokeColor}
          strokeWidth={element.strokeWidth}
        />
        <polygon
          points={`${x + width * 0.7},${y + height * 0.8} ${x + width * 0.9},${y + height} ${x + width * 0.7},${y + height}`}
          fill="none"
          stroke={element.strokeColor}
          strokeWidth={element.strokeWidth}
        />
      </g>
    );
  };

  const renderPawn = (element: ShapeElement) => {
    if (!element.position || !element.size) return null;
    
    const { x, y } = element.position;
    const { width, height } = element.size;
    
    return (
      <g key={`pawn-${x}-${y}`}>
        {/* Pawn head */}
        <circle
          cx={x + width * 0.5}
          cy={y + height * 0.2}
          r={width * 0.15}
          fill="none"
          stroke={element.strokeColor}
          strokeWidth={element.strokeWidth}
        />
        {/* Pawn neck */}
        <rect
          x={x + width * 0.4}
          y={y + height * 0.3}
          width={width * 0.2}
          height={height * 0.2}
          fill="none"
          stroke={element.strokeColor}
          strokeWidth={element.strokeWidth}
        />
        {/* Pawn body */}
        <polygon
          points={`${x + width * 0.35},${y + height * 0.5} ${x + width * 0.65},${y + height * 0.5} ${x + width * 0.7},${y + height * 0.85} ${x + width * 0.3},${y + height * 0.85}`}
          fill="none"
          stroke={element.strokeColor}
          strokeWidth={element.strokeWidth}
        />
        {/* Pawn base */}
        <rect
          x={x + width * 0.25}
          y={y + height * 0.85}
          width={width * 0.5}
          height={height * 0.15}
          fill="none"
          stroke={element.strokeColor}
          strokeWidth={element.strokeWidth}
        />
      </g>
    );
  };

  const renderSmoke = (element: ShapeElement) => {
    if (!element.curves) return null;
    
    return (
      <g key="smoke">
        {element.curves.map((curve, index) => (
          <circle
            key={`smoke-${index}`}
            cx={curve.cx}
            cy={curve.cy}
            r={curve.r}
            fill="none"
            stroke={element.strokeColor}
            strokeWidth={element.strokeWidth}
            opacity={0.7 - index * 0.1}
          />
        ))}
      </g>
    );
  };

  const renderElement = (element: ShapeElement) => {
    switch (element.type) {
      case 'rocket':
        return renderRocket(element);
      case 'pawn':
        return renderPawn(element);
      case 'smoke':
        return renderSmoke(element);
      default:
        return null;
    }
  };

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {elements.map((element, index) => (
        <React.Fragment key={index}>
          {renderElement(element)}
        </React.Fragment>
      ))}
    </svg>
  );
};

export default CustomBackgroundShapes;