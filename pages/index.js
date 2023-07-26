import Hero from "@/components/Home/Hero/Hero";
import Modal from "@/components/ui/Modal/Modal";
import { useState } from "react";

export default function Home() {
  const [isShowModal, setShowModal] = useState(true);
  const heroHeading = "Hero Heading";
  const heroDesc =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quaerat illo est, odit porro nemo delectus iste quasi voluptate saepe?";
  const heroBtn = "Home  Button";

  return (
    <div className="h-[300vh]">
      <Hero heroHeading={heroHeading} heroDesc={heroDesc} heroBtn={heroBtn} />
      {isShowModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="w-[200px] h-[150p] text-center">hello world</div>
        </Modal>
      )}
    </div>
  );
}
