// src/components/common/BottomSheet.jsx

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

function BottomSheet({ open, onClose, title = "Menu", children }) {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    function handleDragEnd(event, info) {
        const dragDistance = info.offset.y;
        const dragSpeed = info.velocity.y;

        // swipe down = close
        if (dragDistance > 120 || dragSpeed > 1700) {
            onClose();
            setExpanded(false);
            return;
        }

        // swipe up = expand
        if (dragDistance < -80) {
            setExpanded(true);
            return;
        }

        // small drag = normal size
        setExpanded(false);
    }

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-50">
                    {/* Overlay */}
                    <motion.div
                        onClick={() => {
                            onClose();
                            setExpanded(false);
                        }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Bottom Sheet */}
                    <motion.div
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={0.15}
                        onDragEnd={handleDragEnd}
                        initial={{ y: "100%" }}
                        animate={{
                            y: 0,
                            height: expanded ? "90vh" : "55vh",
                        }}
                        exit={{ y: "100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 28,
                        }}
                        className="absolute bottom-0 left-0 right-0 bg-slate-950 border-t border-slate-800 rounded-t-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Drag Handle */}
                        <div className="flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing">
                            <div className="w-12 h-1.5 rounded-full bg-slate-600" />
                        </div>

                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
                            <h2 className="text-white text-lg font-bold">{title}</h2>

                            <button
                                onClick={() => {
                                    onClose();
                                    setExpanded(false);
                                }}
                                className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-300 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-5 h-full overflow-y-auto pb-24">{children}</div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export default BottomSheet;