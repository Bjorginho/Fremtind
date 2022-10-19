import React, { useContext, useState, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { GridRow } from "./GridRow";
import { UserContext } from '../context/UserContext';
import { Period } from '../models/Insurance';

type Props = {
  changePage: () => void
}

const InsuranceInfo = ({changePage} : Props) => {
  const { insurance } = useContext(UserContext);
  const [period, setPeriod] = useState<string>();

  useEffect(() => {
    if (insurance !== undefined) {
      setPeriod(
        insurance.start.toLocaleDateString() +
          " - " +
          insurance.end.toLocaleDateString()
      );
    }
  }, [insurance]);

  return (
    <div>
      {insurance !== undefined && (
        <Box sx={{ pt: "20%" }}>
          <Typography
            sx={{ fontWeight: 600, fontFamily: "Fremtind" }}
            variant="body1"
          >
            {`Du betaler ${insurance.cost}/${Period[insurance.currency]}`}
          </Typography>
          {/* <Link href="/oversikt" variant="body1" color="inherit" underline="none">
            Fakturaoversikt &#8594;
          </Link> */}
          <Typography variant="body1" color="inherit" onClick={changePage}>Fakturaoversikt &#8594;</Typography>
          <Grid
            container
            rowSpacing={1}
            sx={{ pt: "5%", width: "fit-content" }}
          >
            <GridRow name="Periode" data={period} />
            <GridRow name="Avtalenummer" data={insurance.id} />
            <GridRow
              name="Dokument"
              data="Avtaledokument (PDF)"
              download={true}
            />
          </Grid>
        </Box>
      )}
    </div>
  );
}

export default InsuranceInfo; 