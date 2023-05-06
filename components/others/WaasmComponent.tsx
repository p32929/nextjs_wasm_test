import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { controller } from '../../utils/StatesController';
import { WasmFunctions } from '../../wasm';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    // Define your styles here
}));

var wasmFuncs: WasmFunctions | null = null

const WaasmComponent: React.FC<Props> = (props) => {
    // Hooks
    const states = useSelector(() => controller.states);
    const classes = useStyles();
    const [sum, setSum] = useState(0)

    useEffect(() => {
        // // @ts-ignore
        // import('../../downloader.wasm')
        //     .then((wasm: WasmFunctions) => {
        //         const { add_twos } = wasm
        //         // @ts-ignore
        //         add_twos_fn = add_twos
        //         console.log(`Wasm imported`)
        //     })
        //     .catch((e) => {
        //         console.log(`Wasm import error`)
        //     })

        // @ts-ignore
        import('../../downloader.wasm')
            .then((wasm) => {
                wasmFuncs = wasm
                console.log(`Wasm imported`)
            })
            .catch((e) => {
                console.log(`Wasm import error`)
            })
    })

    return (
        <Grid container direction='column' justifyContent='center' alignItems='center' alignContent='center'>
            <Typography variant='h6'>{sum}</Typography>
            <TextField id='tf1' />
            <TextField id='tf2' />
            <Button color='secondary' variant='contained' onClick={() => {
                // @ts-ignore
                const vv1 = document.getElementById('tf1').value
                // @ts-ignore
                const vv2 = document.getElementById('tf2').value
                if (vv1 && vv2) {
                    setSum(wasmFuncs?.add_twos(vv1, vv2) ?? 0)
                }
            }}>+</Button>
        </Grid>
    )

}

export default WaasmComponent;