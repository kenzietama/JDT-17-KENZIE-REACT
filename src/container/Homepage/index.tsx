import React from "react";
import Box from "../../components/box";
import { useNavigate } from "react-router";
import Button from "../../components/button";
import { useToken } from "@/hooks/useToken";

const Index = () => {
  const navigate = useNavigate();

  const Experience = [
    {
      title: "PT Indivara Group",
      desc: "Frontend Developer yang mengerjakan 3 Aplikasi Wealth Management System",
    },
    {
      title: "PT Suka Group",
      desc: "Backend Developer yang mengerjakan 3 Aplikasi Distribution Management System",
    },
  ];

  const movePage = (url: string, state?: string) => {
    navigate(url, {
      state: state,
    })
  };

  return (
    <>
      <div className="flex flex-row gap-4">
        {Experience.map((el, index) => {
          return <Box title={el.title} desc={el.desc} index={index} />;
        })}
      </div>
      <div className="flex flex-col">
        <Button
          onClick={() => movePage("/cv-page")}
          content="Move page to CV"
        />
        <Button
          onClick={() => movePage("movie-page", "ini dari homepage")}
          content="Move page to Movies"
        />
      </div>
    </>
  );
};

export default Index;
