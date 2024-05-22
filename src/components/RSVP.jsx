import React from "react";

const TextInput = ({ label, name, fullWidth = false }) => (
  <label className={`flex flex-col ${fullWidth ? "col-span-2" : ""}`}>
    {label}
    <input
      type="text"
      name={name}
      className="px-2 py-1 border border-solid border-[#325c3e] bg-transparent focus:outline-none"
    />
  </label>
);

const CheckboxGroup = ({ question, name, options }) => (
  <label className="grid grid-cols-[1fr_1fr] col-span-2">
    <div className="col-span-2">{question}</div>
    {options.map((option, index) => (
      <div
        key={index}
        className={`col-start-${index + 1} flex items-center gap-2`}
      >
        <input
          type="checkbox"
          name={name}
          value={option}
          className="form-checkbox h-5 w-5"
        />
        <label>{option}</label>
      </div>
    ))}
  </label>
);

export const RSVP = () => {
  return (
    <div className="flex flex-col justify-center p-2 lg:w-[70dvw]">
      <h1
        data-aos="fade-up"
        className="text-[3rem] uppercase text-left leading-none font-bold mb-2"
      >
        Hoppas vi ses!?
      </h1>
      <h3 data-aos="fade-up" className="uppercase mb-4 text-sm">
        OSA senast 6 juni. Är ni två? Osa varsin separat eller en tillsammans.
      </h3>
      <form
        data-aos="fade-up"
        action="https://docs.google.com/forms/d/e/1FAIpQLSdQQgarwVVdG2YnuhvywtzLcslRYXoYggUnzt7hK4_MV08Aig/formResponse"
        className="grid grid-cols-[1fr_1fr] gap-4 font-[Garamond] font-bold uppercase text-sm"
      >
        <TextInput label="Förnamn" name="entry.1359921993" />
        <TextInput label="Efternamn" name="entry.753061884" />
        <TextInput label="Email" name="entry.611177272" fullWidth />

        <CheckboxGroup
          question="Kommer du fredagen 16 augusti?"
          name="entry.426139328"
          options={["Ja", "Nej"]}
        />

        <CheckboxGroup
          question="Kommer du lördagen 17 augusti?"
          name="entry.761862295"
          options={["Ja", "Nej"]}
        />

        <TextInput label="Förnamn +1" name="entry.1456683928" />
        <TextInput label="Efternamn +1" name="entry.974168247" />
        <TextInput label="Email +1" name="entry.1364265115" fullWidth />

        <CheckboxGroup
          question="Kommer +1 fredagen 16 augusti?"
          name="entry.1572848521"
          options={["Ja", "Nej"]}
        />

        <CheckboxGroup
          question="Kommer +1 lördagen 17 augusti?"
          name="entry.521764840"
          options={["Ja", "Nej"]}
        />

        <TextInput
          label="Några matpreferenser eller allergier?"
          name="entry.1221301737"
          fullWidth
        />

        <input
          type="submit"
          value="Skicka"
          className="bg-green text-pink px-2 py-1 cursor-pointer col-span-2 uppercase border border-green"
        />
      </form>
    </div>
  );
};
