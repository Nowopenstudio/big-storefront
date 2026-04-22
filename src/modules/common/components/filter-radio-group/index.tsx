import { EllipseMiniSolid } from "@medusajs/icons"
import { Label, RadioGroup, Text, clx } from "@medusajs/ui"

type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
  "data-testid"?: string
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}: FilterRadioGroupProps) => {
  return (
   <div className="w-full border-b-[3px] border-black bg-[--yellow] flex justify-between items-center navHold">
    <div className="px-6">{title}</div>
      <div className="flex items-center w-auto flex-nowrap justify-end h-full">
        <RadioGroup data-testid={dataTestId} onValueChange={handleChange} className="flex justify-center w-auto flex-nowrap h-full gap-0">
          {items?.map((i) => (
            <div
              key={i.value}
              className={clx(`flex  items-center  border-l-[3px] border-black`,
                {
                  "bg-[--green]": i.value === value,
                }
              )}
            >
             
              <RadioGroup.Item
                checked={i.value === value}
                className="hidden peer"
                id={i.value}
                value={i.value}
              />
              <Label
                htmlFor={i.value}
                className={clx(
                  " !transform-none  hover:cursor-pointer navHold p-4",
                  {
                    "bg-[--green]": i.value === value,
                  }
                )}
                data-testid="radio-label"
                data-active={i.value === value}
              >
                {i.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
   </div>
  )
}

export default FilterRadioGroup
