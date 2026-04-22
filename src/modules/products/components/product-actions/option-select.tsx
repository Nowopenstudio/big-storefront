import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"
import React from "react"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = (option.values ?? []).map((v) => v.value)

  return (
    <div className="w-full">
      <div
        className="flex flex-nowrap justify-around w-full"
        data-testid={dataTestId}
      >
        {filteredOptions.map((v,index) => {
          return (
            <button
              onClick={() => updateOption(option.id, v)}
              key={v}
              style={{flexGrow:filteredOptions.length <= 2 ? 1 : index+1}}
              className={clx(
                "border-r-[3px] border-b-[3px]  border-black text-small-regular h-[55px] p-2 flex-1 rounded-none my-0 mt-0 navHold",
                {
                  "bg-[--black] text-[--white]": v === current,
                  "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
                    v !== current,
                    
                }
              )}
              disabled={disabled}
              data-testid="option-button"
            >
              {v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
