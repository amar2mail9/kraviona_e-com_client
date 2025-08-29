"use client";
import { colorcode } from "@/context/data";
import { Divider } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { CardDesign, CardLoader } from "../Loader/CardComponents";

function SearchResult() {
  const { search } = useParams();
  const [searchData, setSearchData] = useState(null); // null = no data yet
  const [loading, setLoading] = useState(true);

  // Fetch data dynamically when "search" changes
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${search}`
        );
        const data = await res.json();
        setSearchData(data.products || []);
      } catch (error) {
        console.error("Error fetching search data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSearch();
  }, [search]);

  return (
    <div className="p-4">
      {/* Loader */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 10 }).map((_, idx) => (
            <CardLoader key={idx} />
          ))}
        </div>
      ) : (
        <>
          {/* Search title */}
          <div className="flex gap-2 items-center mb-3">
            <strong className="text-2xl">Search:</strong>
            <p className="text-xl">{search}</p>
          </div>
          <Divider />

          {/* Search results */}
          {searchData && searchData.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {searchData.map((product, i) => (
                <CardDesign {...product} key={i} />
              ))}
            </div>
          ) : (
            <p className="mt-4 text-gray-500">
              No results found for "{search}".
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default SearchResult;
