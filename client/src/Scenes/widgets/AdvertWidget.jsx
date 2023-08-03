import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Add!</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        styled={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Nike</Typography>
        <Typography color={medium}>www.nike.com</Typography>
      </FlexBetween>
      <Typography>Just Do it</Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
