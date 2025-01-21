import { PiCertificateLight } from "react-icons/pi";

export default function CertificationInput(){
    return (
        <div id="eduForm-certificates" className="mb-2">
          <div className="flex flex-row space-x-5">
            <span>
              <PiCertificateLight color="grey" size={30} />
            </span>
            <span className="text-white text-2xl">Certificates</span>
          </div>
          <div className="my-2 flex flex-col">
            <input
              type="text"
              placeholder="Name of the Certificate"
              className="rounded-md w-72 h-8 mb-2"
            />
            <input
              type="text"
              placeholder="Awarding Organisation"
              className="rounded-md w-72 h-8 mb-2"
            />
            <span className="text-white"> Date</span>
            <input
              type="date"
              name="startDate"
              placeholder="Date"
              className="rounded-md w-72 h-8 mb-2"
            />
          </div>
        </div>
    );
}