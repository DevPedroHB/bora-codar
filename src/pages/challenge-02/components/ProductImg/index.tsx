import SofaGif from "@/assets/images/sofa.gif";
import SofaImg from "@/assets/images/sofa.jpg";
import Image from "next/image";
import { ArrowsClockwise, X } from "phosphor-react";
import { useState } from "react";
import { ProductImgContainer } from "./styles";

export function ProductImg() {
  const [toggle, setToggle] = useState(false);

  return toggle ? (
    <ProductImgContainer>
      <X
        size={32}
        weight="fill"
        color="#271A45"
        onClick={() => setToggle(!toggle)}
      />
      <Image
        src={SofaGif}
        width={449}
        height={222}
        alt="Sofa rosa."
        unoptimized={true}
      />
    </ProductImgContainer>
  ) : (
    <ProductImgContainer>
      <ArrowsClockwise
        size={32}
        weight="fill"
        color="#271A45"
        onClick={() => setToggle(!toggle)}
      />
      <Image src={SofaImg} width={449} height={222} alt="Sofa rosa." />
    </ProductImgContainer>
  );
}
