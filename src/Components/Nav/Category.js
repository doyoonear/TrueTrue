import React, { Component, useState } from "react";
import styled, { keyframes } from "styled-components";

function Category({ title, list }) {
  return (
    <ul>
      <li>{title}</li>
      <li>
        <span>{list[0]}</span>
      </li>
      <li>
        <span>{list[1]}</span>
      </li>
      <li>
        <span>{list[2]}</span>
      </li>
      <li>
        <span>{list[3]}</span>
      </li>
      <li>
        <span>{list[4]}</span>
      </li>
    </ul>
  );
}

export default Category;
