import { MyImage } from "@/Utility/HomeSliderData";
export default function ImageTable({ data, type }) {
    return (
        <>
            {
                data?.map((item, i) => (
                    <div key={i} className={item?.className}>
                        <div className="guest-img">
                            <MyImage
                                src={item?.GuestImg}
                                alt="uitify"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                    </div>
                ))
            }
        </>
    )
};
