import React  from "react";
import styled from "styled-components";
import { useProductContext } from "./context/productContaxt";

const Products = () => {
 

  const {myName} = useProductContext();
   
  return <Wrapper>
    {myName}

  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
