import React from 'react';
import { Theme } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


interface Props {
    size?: number,
    path: string,
    style?: React.CSSProperties
}

const getThemeObj = (theme: Theme) => {
    return {
        //
    }
};

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)));

const SvgIconRenderer: React.FC<Props> = (props) => {
    // const {} = useActions()
    // const {} = useAppState()

    const classes = useStyles();
    const { size = 24, path, style } = props;

    return <svg style={{ width: size, height: size, ...style }} viewBox="0 0 24 24">
        <path fill={style?.color ?? "#FFF"}
            d={path} />
    </svg>
};

export default SvgIconRenderer;
