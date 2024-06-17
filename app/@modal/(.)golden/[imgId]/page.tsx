import { Modal } from "@/app/@modal/(.)golden/[imgId]/modal";
import Image from "next/image";

export default function Golden({ params }: { params: { imgId: string } }) {
  return (
    <Modal>
      <div className="relative w-[256px] h-[388px]">
        <Image
          fill={true}
          alt={"img"}
          src={`https://d15f34w2p8l1cc.cloudfront.net/hearthstone/${params.imgId}`}
          className=""
        />
      </div>
    </Modal>
  );
}
