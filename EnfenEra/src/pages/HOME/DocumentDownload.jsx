import { DockIcon, File, X } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Pdf from "./Documents/Pdf";
import UploadPdf from "./Documents/UploadPdf";
// import { div } from "framer-motion/client";



const doc = [
    { id: "001", DocumentName: "Hellow Brow", color: "red", size: "2.8MB" },
    { id: "002", DocumentName: "Hellow Brow How", color: "purple", size: "8.8MB" }
]

function DocumentDownload() {
    const [IsOpen, SetOpen] = useState(true)

    return (
        <>
            {IsOpen && (<div className="fixed top-0  block w-full h-screen bg-black/50">
                <div className="flex justify-center items-center w-full  h-full">
                    <div className=" w-100">
                        <AnimatePresence>
                            {IsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className=" bg-black/90 border border-white/10 rounded-3xl p-8 backdrop-blur-3xl">
                                    <div className="w-full">
                                        <div className="flex justify-between">
                                            <div className="flex gap-3 text-gray-500 font-black text-sm"><File size={20} /> <span>Document</span></div>
                                            <div
                                                onClick={() => SetOpen(!IsOpen)}
                                            ><X color="red"/></div>
                                        </div>

                                        <div>
                                            {doc.map((Element) => (
                                                <div className="py-3 text-sm" key={Element.id}>
                                                    <Pdf
                                                        Document={Element.DocumentName}
                                                        color={Element.color}
                                                        size={Element.size}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <div>
                                            <UploadPdf />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}

export default DocumentDownload;
