import { styled } from "@mui/material/styles";

export const PageTitleContainer = styled("div")`
  text-align: center;
  margin: ${({ theme }) => theme.spacing(5)} 0;
`;

export const PageTitleStyled = styled("h2")`
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.h6.fontSize};

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const PageTitleSubtitleStyled = styled("h3")`
  margin: ${({ theme }) => theme.spacing(1.5)} 0;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.body1.fontSize};

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;
