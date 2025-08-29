"use client";
import { menuList } from "@/context/data";
import { Badge, Box, button, Modal } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { TiThMenu } from "react-icons/ti";

import Link from "next/link";
import React, { useState } from "react";
import { FavoriteOutlined, Login, Logout } from "@mui/icons-material";

import { FiSearch } from "react-icons/fi";
import { FaUserLarge } from "react-icons/fa6";
import { useRouter } from "next/navigation";

/* ✅ Styled Badge */
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);

  // search value
  const [searchInput, setSearchInput] = useState(null);
  const router = useRouter();

  const searchValue = (e) => {
    e.preventDefault();
    if (searchInput.trim() === null || "") {
      return <alert>Enter Value</alert>;
    } else {
      router.push(`/searchresult/${searchInput}`);
      handleClose();
      setSearchInput("");
    }
  };

  return (
    <header className="shadow-sm sticky top-0 z-50 backdrop-blur-[150px] bg-white/70 ">
      <nav className="flex items-center justify-between w-full px-6 lg:px-[10%] py-[20px]">
        {/* Logo */}
        <Link href="/" onClick={() => setMobileMenu(false)}>
          <img
            src="/logo.png"
            alt="logo"
            className="hidden md:block w-[150px] lg:w-[180px]"
          />
          <img
            src="/favicon.ico"
            alt="logo"
            className="md:hidden w-[40px] rounded-full"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">
          {menuList.map(({ name, link }, idx) => (
            <li key={idx}>
              <Link
                href={link}
                className="transition-colors hover:!text-blue-600"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex justify-center items-center gap-2 md:gap-8">
          {/* search  */}
          <button onClick={handleOpen}>
            <FiSearch className="hover:!text-blue-600 text-xl text-blue-500" />
          </button>

          {/* cart  */}
          <button aria-label="cart" className="md:!block !hidden">
            <StyledBadge badgeContent={4} color="warning">
              <ShoppingCartIcon className="text-emerald-500" />
            </StyledBadge>
          </button>

          {/* wish  */}
          <button
            className="md:!block !hidden"
            style={{
              padding: 0,
              width: 20,
              aspectRatio: 20,
            }}
          >
            <FavoriteOutlined className="hover:!text-rose-600 text-rose-500" />
          </button>

          {/* user  */}
          <button className="md:!block !hidden">
            <FaUserLarge className="hover:!text-blue-600 text-gray-600" />
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:!hidden !block" onClick={handleOpenMenu}>
            <TiThMenu className="text-orange-600 text-2xl" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <Modal open={openMenu} onClose={handleCloseMenu}>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "75%",
            maxWidth: 320,
            height: "100%",
            background: "var(--background)",
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header / Branding */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <img src="./logo.png" alt="Logo" width={120} />
            <button onClick={handleCloseMenu} className="text-rose-500">
              ❌
            </button>
          </div>

          {/* Menu Items */}
          <ul className="p-4 flex flex-col gap-2 text-[16px] font-medium flex-1 overflow-y-auto">
            {menuList.map(({ name, link }, idx) => (
              <li key={idx} className="" style={{}}>
                <Link
                  href={link}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-emerald-100 hover:!text-orange-500"
                  onClick={handleCloseMenu}
                >
                  {name}
                </Link>
              </li>
            ))}

            {/* Divider */}
            <hr className="my-2 border-gray-300" />

            {/* Extra Links */}
            <li>
              <Link
                href="/wishlist"
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200  hover:bg-emerald-100 hover:!text-orange-500"
                onClick={handleCloseMenu}
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200  hover:bg-emerald-100 hover:!text-orange-500"
                onClick={handleCloseMenu}
              >
                My Profile
              </Link>
            </li>
          </ul>

          {/* Bottom Button */}
          <div className="p-4 border-t border-gray-200">
            {localStorage.getItem("accessToken") ? (
              <Link
                href="/logout"
                className="flex items-center rounded-full py-2 gap-3 text-center justify-center transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                onClick={handleCloseMenu}
                style={{
                  background: "var(--danger)",
                }}
              >
                <Logout /> Logout
              </Link>
            ) : (
              <Link
                href="/logout"
                className="flex items-center rounded-full py-2 gap-3 text-center justify-center transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                onClick={handleCloseMenu}
                style={{
                  background: "var(--accent)",
                  color: "var(--border)",
                }}
              >
                <Login /> Login
              </Link>
            )}
          </div>
        </Box>
      </Modal>

      {/* Search Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 800,
            background: "var(--surface)",
            borderRadius: 10,
            padding: 2,
          }}
        >
          {/* ✅ Rounded Search Input */}
          <form onSubmit={searchValue} className="w-full h-full">
            <div className="flex w-full h-full items-center justify-between">
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                placeholder="Search products..."
                className="w-full h-full px-4 outline-0 border-0"
              />

              <button onClick={searchValue}>
                <SearchIcon />
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </header>
  );
};
