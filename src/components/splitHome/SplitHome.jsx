import styles from './SplitHome.module.css';
import Grid from '@mui/material/Grid';
import { SplitHomeLeft } from './splitHomeLeft/splitHomeLeft';

export function SplitHome() {


    return (
        <div>
            <Grid className={styles.gridMain} container spacing={2}>
                <Grid className={styles.gridLeft} xs={3}>
                    {/* left */}
                    <SplitHomeLeft />
                </Grid>

                <Grid className={styles.gridMiddle} xs={6}>
                    {/* middle */}
                    <h1>middle</h1>
                </Grid>

                <Grid className={styles.gridRight} xs={3}>
                    {/* right */}
                    <h1>right</h1>
                </Grid>

            </Grid>
        </div>
    );
}