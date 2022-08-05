import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";
import PubSub from "pubsub-js";

export default () => {
  const itemList = [];
  const [count, setCount] = useState(0);

  useEffect(async () => {
    PubSub.subscribe("ADD_TO_CART", function (msg, data) {
      itemList.push(data);

      setCount(itemList.length);
    });
    return () => {
      PubSub.unsubscribe("ADD_TO_CART");
    };
  }, []);

  return (
    <Badge overlap="rectangular" badgeContent={count} color="error">
      <ShoppingCartOutlinedIcon />
    </Badge>
  );
};
