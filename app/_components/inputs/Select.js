'use client';

import ReactSelect from 'react-select';

function Select({ disabled, label, options, onChange, value }) {
  return (
    <div className="z-[100]">
      <label
        className="
        block
        text-sm
        font-medium
        leading-6
        text-gray-900
      "
      >
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          isMulti={true}
          options={options}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({
              ...base,
              zIndex: 999,
            }),
          }}
          className={{
            control: () => 'text-sm',
          }}
        />
      </div>
    </div>
  );
}

export default Select;
