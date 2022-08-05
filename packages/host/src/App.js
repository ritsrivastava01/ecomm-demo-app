import React, { lazy, Suspense, useState, userEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";

export default function App() {
  return (
    <>
      <Header></Header>
      <MarketingApp></MarketingApp>
    </>
  );
}
