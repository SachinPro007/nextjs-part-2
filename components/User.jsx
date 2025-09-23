"use client";

import { useUser } from "@/contextData/ContextData";

const User = () => {
  const { user } = useUser();
  // console.log(user);

  return (
    <p>
      My name is {user.name} and I am {user.age} years old..... I am as a{" "}
      {user.role} in {user.city} city..... This info geting from context api
    </p>
  );
};

export default User;
