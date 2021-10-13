import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function Index() {
  const [show, setShow] = useState(false);
  return (
    <section className="flex items-center justify-center w-screen h-screen main-background-gradient">
      <Button onClick={() => setShow(!show)} className="stroke">
        Налоговый вычет
      </Button>
      <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
        <p>This is modal body</p>
      </Modal>
    </section>
  );
}
