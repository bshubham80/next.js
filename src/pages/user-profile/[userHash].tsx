import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
  GetStaticPathsResult,
} from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const UserTypeContext = React.createContext({
  userTypeCxtVal: undefined,
  userTypeCxtUpdateVal: undefined,
});

const UserProfile: React.FC = () => {
  const { query } = useRouter();
  const { userHash } = query;

  return <p>{JSON.stringify(query)}</p>;
};

export default UserProfile;
