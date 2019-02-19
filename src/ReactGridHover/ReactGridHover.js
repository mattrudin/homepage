import React from 'react'
import styled from 'styled-components'
import { gridDefiner, designChecker, scaleFactorChecker } from './utilities'

const ReactGridHover = (props) => { 
    const { children, itemSize, design = 'standard', scaleFactor = '1.1' } = props
    const columnsNumber = gridDefiner(children)
    const rowsNumber = gridDefiner(children) + 1

    const GridContainer = styled.div`
        display: grid;
        grid-gap: 20px;
        width: ${itemSize * columnsNumber}px;
        height: ${itemSize * rowsNumber}px;
        grid-template-columns: repeat(${columnsNumber}, 1fr);
        grid-template-rows: repeat(${rowsNumber}, 1fr);
    `

    const GridChild = styled.div`
        width: ${itemSize}px;
        height: ${itemSize}px;
        transition-duration: 0.5s;
        ${designChecker(design) === 'flat' ? "" : 'box-shadow: -2px 2px 1px #888888'};
        :hover {
            transform: scale(${scaleFactorChecker(scaleFactor)});
            ${designChecker(design) === 'flat' ? "" : 'box-shadow: -3px 3px 20px #888888'};
            z-index: 1;
        }
        img {
            width: 100%;
            height: 100%;
        }
    `
    
    return ( 
        <GridContainer>
            {children.map(child => (
                <GridChild>
                    {child}
                </GridChild>
            ))}
        </GridContainer>
     );
}


export default ReactGridHover
