import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react'

type Props = {
  name: string,
  data: string | number | undefined, 
  download?: boolean
}

export const GridRow = ({name, data, download = false} : Props) => {

  const downloadPDF = () => {
    fetch('TestPDF.pdf').then(
      res => {
        res.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "TestPDF.pdf";
          alink.click();
        });
      }
    )
  }
  
  return (
    <>
      <Grid item xs={4}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 600, width: "fit-content" }}
        >
          {name}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        {download ? (
          <Typography
            onClick={downloadPDF}
            variant="body2"
            sx={{ width: "fit-content", textDecoration: "underline" }}
          >
            {download ? data + " \u2197" : data}
          </Typography>
        ) : (
          <Typography variant="body2" sx={{ width: "fit-content" }}>
            {data}
          </Typography>
        )}
      </Grid>
    </>
  );
}