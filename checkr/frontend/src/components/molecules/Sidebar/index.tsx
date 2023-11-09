import React,{ useState } from "react";
import recruit from "../../../../public/assests/images/recruit.png";
import { Divider, Stack, Modal, Card, Box } from "@mui/material";
import theme from "../../../theme/Theme";
import Typography from "../../atoms/Typography";
import IconButton from "../../atoms/IconButton";
import Icon from "../../atoms/icon";
import profile from "../../../../public/assests/images/profile.svg";
import door from "../../../../public/assests/images/Door.svg";
import dash from "../../../../public/assests/images/Dashboard.svg";
import contacts from "../../../../public/assests/images/Contacts.svg";
import hammer from "../../../../public/assests/images/hammer.svg";
import logs from "../../../../public/assests/images/logs.svg";
import analytics from "../../../../public/assests/images/Analytics.svg";
import account from "../../../../public/assests/images/Account.svg";
import screening from "../../../../public/assests/images/Screening.svg";
import styled from "@emotion/styled";
import { LogoutCard } from "../logoutCard";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { CustomButton } from "../../utils/functions";
import { LogoutConstants } from "../../../constants";

const Button = styled(IconButton)({
  backgroundColor: theme.palette.structural.white,
  border: "none",
  width: "190px",
  height: "34px",
  bordeRadius: "6px",
  justifyContent: "flex-start",
  textTransform: "none",
  borderColor: theme.palette.textColor.white,
  color: theme.palette.greyColor.icon01,
  "&:hover": {
    backgroundColor: theme.palette.textColor.white,
    borderColor: theme.palette.textColor.white,
  },
});

const StyledCard = styled(Card)({
  width: "238px",
  height: "55rem",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  boxShadow: "0px 4px 28px 0px rgba(45, 45, 47, 0.10)",
});

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  margin: "19%",
});

const LogoutBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 8px 20px 16px",
});

const IconTypoBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "6px",
  alignItems: "center",
});

const LogoutButton = styled(IconButton)({
  "&:hover": {
    backgroundColor: theme.palette.textColor.white,
  },

  marginRight: "-8px",
});

interface SidebarProps {
  highlight?: string;
}

const Sidebar = ({ highlight }: SidebarProps) => {
  const navigate = useNavigate();
  const { logout } = useAuth0();

  const [logoutState, setLogoutState] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const toggleLogout = () => {
    setOpen(true);
    setLogoutState(!logoutState);
  };

  return (
    <StyledCard>
      <Stack spacing={3.5} padding={"18px"}>
        <Stack padding={"14px 0px 0px 14px"}>
          <Icon src={recruit} width="78px" height="20px" />
        </Stack>
        <CustomButton
          icon={dash}
          label={LogoutConstants.sideNavBarHeadings[0]}
        />
        <Stack spacing={5.5}>
          <Button
            variant="outlined"
            icon={contacts}
            text={
              <Typography
                color={`${theme.palette.textColor.highemp}`}
                variant="body1"
                label={LogoutConstants.sideNavBarHeadings[1]}
                sx={{ fontWeight: "600" }}
              />
            }
            onClick={() => {
              navigate("/candidates");
            }}
            sx={{
              backgroundColor:
                highlight === "candidates"
                  ? theme.palette.primaryColor[300]
                  : "",
            }}
          />
          <Button
            variant="outlined"
            icon={hammer}
            text={
              <Typography
                color={`${theme.palette.textColor.highemp}`}
                variant="body1"
                label={LogoutConstants.sideNavBarHeadings[2]}
                sx={{ fontWeight: "600" }}
              />
            }
            onClick={() => {
              navigate("/adverse-actions");
            }}
            sx={{
              backgroundColor:
                highlight === "adverse-actions"
                  ? theme.palette.primaryColor[300]
                  : "",
            }}
          />
        </Stack>

        <CustomButton
          icon={logs}
          label={LogoutConstants.sideNavBarHeadings[3]}
        />

        <CustomButton
          icon={analytics}
          label={LogoutConstants.sideNavBarHeadings[4]}
        />

        <CustomButton
          icon={account}
          label={LogoutConstants.sideNavBarHeadings[5]}
        />

        <CustomButton
          icon={screening}
          label={LogoutConstants.sideNavBarHeadings[6]}
        />
      </Stack>
      <Stack>
        <Divider />

        <LogoutBox>
          <IconTypoBox data-testid="icon-element">
            <Icon src={profile} alt="profile" height="36px" width="36px" />
            <Stack marginTop={"4px"}>
              <Typography
                color={`${theme.palette.textColor.highemp}`}
                variant="body1"
                label={LogoutConstants.profileName}
              />
              <Typography
                color={`${theme.palette.textColor.lowemp}`}
                variant="caption"
                label={LogoutConstants.profileSubtext}
              />
            </Stack>
          </IconTypoBox>
          <LogoutButton
            variant={"text"}
            text={<Icon src={door} alt="logout" />}
            onClick={toggleLogout}
          />
        </LogoutBox>
      </Stack>

      {logoutState && (
        <StyledModal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <LogoutCard
            handleCancel={toggleLogout}
            handleLogout={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          />
        </StyledModal>
      )}
    </StyledCard>
  );
};

export default Sidebar;