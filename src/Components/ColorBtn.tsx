import React from 'react'

interface IProps {
    color: string;
    colors: string[];
    handleClick: (color: string) => void;
}

interface IColorMatch {
    белый: string,
    желтый: string,
    красный: string,
    синий: string,
    зелёный: string,
}

const colorMatch: IColorMatch = {
    белый: "white",
    желтый: "yellow",
    красный: "red",
    синий: "blue",
    зелёный: "green"
}

const ColorBtn = ({color, colors, handleClick}: IProps) => {

    const colorKey = Object.keys(colorMatch).find(key => key === color);
    const classColor= colorMatch[colorKey];

    return (
        <button
        type="button"
        aria-label={color}
        onKeyDown={() => handleClick(color)}
        className={`button-${classColor} ${colors.includes(color) ? 'active-color' : ''}`}
        onClick={() => {
          handleClick(color);
        }}
      />
    )
}

export default ColorBtn
