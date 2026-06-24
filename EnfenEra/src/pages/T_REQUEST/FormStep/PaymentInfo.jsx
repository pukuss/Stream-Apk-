import React, { useEffect, useMemo } from "react";

function PaymentInfo({ watch, register, setValue }) {
  const feeconfig = {
    "open-hosting": {
      fee: 0,
      label: "Free Hosting",
    },
    "host-managed": {
      fee: 10,
      label: "Host Managed",
    },
    "platform-assisted": {
      fee: 20,
      label: "Platform Assisted",
    },
  };

  const entryFeeValue = watch("entryFee");
  const platformFeeValue = watch("platformFee");
  const hostingType = watch("hostingType") || "open-hosting";

  const entryFee = Number(entryFeeValue || 0);
  const platformFee = Number(platformFeeValue || 0);
  const hostingFee = Number(feeconfig[hostingType]?.fee || 0);

  const gstAmount = useMemo(() => {
    return entryFee * 0.18;
  }, [entryFee]);

  const totalAmount = useMemo(() => {
    return entryFee + platformFee + hostingFee + gstAmount;
  }, [entryFee, platformFee, hostingFee, gstAmount]);

  useEffect(() => {
    setValue("hostingFee", Number(hostingFee.toFixed(2)));
    setValue("gstAmount", Number(gstAmount.toFixed(2)));
    setValue("totalAmount", Number(totalAmount.toFixed(2)));
  }, [hostingFee, gstAmount, totalAmount, setValue]);

  return (
    <div className="w-full h-full">
      <header className="font-bold text-xl mb-4">
        Payment And Information
      </header>

      <main className="w-full h-full flex flex-col gap-3">
        <div className="px-5 py-5 rounded-xl bg-white text-black flex flex-col">
          <label className="px-2 font-semibold" htmlFor="entryFee">
            Joining Fee *
          </label>

          <input
            className="py-2 rounded-3xl px-3 bg-gray-300 placeholder:text-gray-700 font-bold outline-none"
            placeholder="₹ Join Fee Per Player [INR]"
            type="number"
            id="entryFee"
            min={0}
            {...register("entryFee", {
              valueAsNumber: true,
            })}
          />
        </div>

        <div className="px-5 py-5 rounded-xl bg-white text-black flex flex-col">
          <label className="px-2 font-semibold" htmlFor="hostingType">
            Hosting Type *
          </label>

          <select
            id="hostingType"
            className="py-2 rounded-3xl px-3 bg-gray-300 font-bold outline-none"
            {...register("hostingType")}
          >
            <option value="open-hosting">Open Hosting</option>
            <option value="host-managed">Host Managed</option>
            <option value="platform-assisted">Platform Assisted</option>
          </select>
        </div>

        <div className="px-5 py-5 rounded-xl bg-white text-black flex flex-col">
          <label className="px-2 font-semibold" htmlFor="platformFee">
            Platform Fee
          </label>

          <input
            className="py-2 rounded-3xl px-3 bg-gray-300 placeholder:text-gray-700 font-bold outline-none"
            placeholder="₹ Platform Fee"
            type="number"
            id="platformFee"
            min={0}
            {...register("platformFee", {
              valueAsNumber: true,
            })}
          />
        </div>

        <input type="hidden" {...register("hostingFee")} />
        <input type="hidden" {...register("gstAmount")} />
        <input type="hidden" {...register("totalAmount")} />

        <section className="bg-white rounded-xl p-4 text-black">
          <div className="w-full py-2 px-2 flex items-center justify-center font-bold text-xl bg-gray-500 text-white rounded-lg">
            Payment Via UPI
          </div>

          <div className="flex gap-5 text-black py-5 font-bold w-full">
            <h1 className="text-slate-400">Hosting Fee:</h1>

            <div className="flex justify-between items-center text-black gap-2">
              <h1>
                {hostingFee === 0 ? (
                  <span className="text-gray-500">FREE</span>
                ) : (
                  hostingFee
                )}
              </h1>

              <span>INR</span>

              <span className="font-serif text-[12px] bg-purple-700/10 border-purple-600 text-purple-600 border px-3 rounded-2xl flex items-center">
                {feeconfig[hostingType]?.label || "Host Plan"}
              </span>
            </div>
          </div>

          <div className="flex gap-5 font-bold w-full py-1">
            <h1 className="text-slate-400">Entry Fee:</h1>

            <h1 className="flex justify-between items-center text-black gap-2">
              {entryFee.toFixed(2)} <span>INR</span>
            </h1>
          </div>

          <div className="flex gap-5 font-bold w-full py-1">
            <h1 className="text-slate-400">GST 18%:</h1>

            <h1 className="flex justify-between items-center text-black gap-2">
              {gstAmount.toFixed(2)} <span>INR</span>
            </h1>
          </div>

          <div className="flex gap-5 font-bold w-full py-1">
            <h1 className="text-slate-400">Platform Fee:</h1>

            <h1 className="flex justify-between items-center text-black gap-2">
              {platformFee.toFixed(2)} <span>INR</span>
            </h1>
          </div>

          <div className="flex gap-5 font-bold w-full mt-4 border-t pt-3">
            <h1 className="text-slate-900">Total:</h1>

            <h1 className="flex justify-between items-center text-green-600 gap-2">
              {totalAmount.toFixed(2)} <span>INR</span>
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PaymentInfo;