import React from 'react'
import { extent as d3ArrayExtent } from 'd3-array';
import { scaleLinear as d3ScaleLinear } from 'd3-scale';
import SVGColors from './svgColorTranslation' // used for colors

type Props = {
  data: any,
  height: number,
  width: number,
};

export const Clusters = ({data, height, width}: Props) => {

    return(
        <div style={{overflow: "auto"}}>
        <svg
        className="clusterArea"
        height={height}
        width={width}
        >
        {data.map((d,i) => <Cluster {...d} key={i}/>)}
        </svg>
        </div>
    );
};

const Cluster = ({points, color, r, scaleX, scaleY}) => {
    return(
        <g className="cluster">
            {points.map(point => <Point posX={point.pos[0]} posY={point.pos[1]} color={SVGColors[color]} r={r} key={point.id}/>)}
        </g>
    );
};


const Point = ({posX, posY,r, recipeID, color}) => {
    return(
        <circle
        cx={posX}
        cy={posY}
        r={r}
        id={recipeID}
        fill={color}
        ></circle>
    );
}
