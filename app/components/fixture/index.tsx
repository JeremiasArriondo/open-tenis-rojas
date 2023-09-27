import Players from "../players";
import { Result } from "../result";

export const Fixture = () => {
  return (
    <div className="overflow-x-auto">
      <ul className="flex min-w-full justify-between gap-6">
        <li className="w-[210px]">Octavos de final</li>
        <li className="w-[210px]">Cuartos de final</li>
        <li className="w-[210px]">Semi Final</li>
        <li className="w-[210px]">Tercer puesto y Final</li>
        <li className="w-[210px]">Semi Final</li>
        <li className="w-[210px]">Cuartos de final</li>
        <li className="w-[210px]">Octavos de final</li>
      </ul>

      <div className="flex gap-6 min-w-full">
        <ul className="match">
          <li className="flex justify-between gap-2 relative border border-orange-500 bg-white rounded-lg p-2 custom bracket_match">
            <Players p1="R. Federer" p2="D. Nabaldian" />
            <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
          </li>
          <li className="flex justify-between gap-2 relative border border-orange-500 bg-white rounded-lg p-2 custom bracket_match">
            <Players p1="R. Nadal" p2="N. Djkovich" />
            <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
          </li>
          <li className="flex justify-between gap-2 relative border border-orange-500 bg-white rounded-lg p-2 custom bracket_match">
            <Players p1="R. Federer" p2="D. Nabaldian" />
            <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
          </li>
          <li className="flex justify-between gap-2 relative border border-orange-500 bg-white rounded-lg p-2 custom bracket_match">
            <Players p1="R. Nadal" p2="N. Djkovich" />
            <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
          </li>
        </ul>
        <ul className="match">
          <li className="flex justify-between gap-2 relative border border-orange-500 bg-white rounded-lg p-2 custom bracket_quarter my-12">
            <Players />
            <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
          </li>
          <li className="flex justify-between gap-2 relative border border-orange-500 bg-white rounded-lg p-2 custom bracket_quarter my-12">
            <Players />
            <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
          </li>
        </ul>
        <ul className="match bracket_semifinal">
          <li className="flex justify-between gap-2 relative border border-orange-500 bg-white rounded-lg p-2 my-12 w-[210px]">
            <Players />
            <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
          </li>
        </ul>
        {/* FINAL */}
        <ul className="match final">
          <li className="flex justify-between gap-2 relative border border-orange-500 bg-white rounded-lg p-2 my-12 bracket_thirdPlacePlayOff w-[210px]">
            <Players />
            <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
          </li>
          <li className="flex flex-col relative border border-orange-500 bg-white rounded-lg my-12 bracket_final w-[210px]">
            <span className="font-bold text-center text-orange-500">FINAL</span>
            <div className="w-full px-2 flex justify-between gap-2 relative">
              <Players />
              <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
            </div>
          </li>
        </ul>
        {/* SEMIFINAL */}
        <ul className="match items-end bracket_semifinal">
          <li className="flex justify-between gap-2 relative border border-orange-500 bg-white rounded-lg p-2 my-12 w-[210px]">
            <Players />
            <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
          </li>
        </ul>
        <ul className="match">
          <li className="flex justify-between gap-2 relative border border-orange-500 bg-white rounded-lg p-2 custom-r bracket_quarter-r my-12">
            <Players />
            <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
          </li>
          <li className="flex justify-between gap-2 relative border border-orange-500 bg-white rounded-lg p-2 custom-r bracket_quarter-r my-12">
            <Players />
            <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
          </li>
        </ul>
        <ul className="match">
          <li className="flex justify-between gap-2 relative border border-orange-500 bg-white rounded-lg p-2 custom-r bracket_match">
            <Players p1="R. Federer" p2="D. Nabaldian" />
            <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
          </li>
          <li className="flex justify-between gap-2 relative border border-orange-500 bg-white rounded-lg p-2 custom-r bracket_match">
            <Players p1="R. Nadal" p2="N. Djkovich" />
            <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
          </li>
          <li className="flex justify-between gap-2 relative border border-orange-500 bg-white rounded-lg p-2 custom-r bracket_match">
            <Players p1="R. Federer" p2="D. Nabaldian" />
            <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
          </li>
          <li className="flex justify-between gap-2 relative border border-orange-500 bg-white rounded-lg p-2 custom-r bracket_match">
            <Players p1="R. Nadal" p2="N. Djkovich" />
            <Result p1={["-", "-", "-"]} p2={["-", "-", "-"]} />
          </li>
        </ul>
      </div>
    </div>
  );
};
