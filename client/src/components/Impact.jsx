import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Impact() {

  const who_link="https://www.who.int/news-room/fact-sheets/detail/preterm-birth"
  const sleep_foundation="https://www.sleepfoundation.org/sleep-apnea/infant-sleep-apnea"
  const sleep_foundation2="https://sleepeducation.org/premature-babies-at-higher-risk-for-sleep-apnea/"

  return (
    <div className=" dark:bg-[rgb(26,24,26)] bg-[rgb(255,201,213)] py-16 mb-16">
      <div className="md:w-[700px] w-[400px] max-sm:w-[300px] m-auto text-xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What problem are we solving?</AccordionTrigger>
            <AccordionContent className="text-base">
              Micromotion amplification using Optical Flow (RAFT) to monitor
              respiration in neonates.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Why are we solving the problem?</AccordionTrigger>
            <AccordionContent className="text-base">
              Around <span className="text-[rgb(225,29,73)] cursor-pointer underline" onClick={()=>window.open(who_link)}>15M</span> babies
              are born pre-term every year in the world and around{" "}
              <span className="text-[rgb(225,29,73)]">30 lakh</span> are born in
              India. Almost all infants born at less than{" "}
              <span className="text-[rgb(225,29,73)]" >28 weeks</span> of
              gestation suffer from sleep apnea and infants born between{" "}
              <span className="text-[rgb(225,29,73)] cursor-pointer underline" onClick={()=>window.open(sleep_foundation2)}>32-35 weeks</span> have{" "}
              <span className="text-[rgb(225,29,73)] cursor-pointer underline" onClick={()=>window.open(sleep_foundation)}>50%</span> chances of
              developing
              <span className="text-[rgb(225,29,73)] italic"> Sleep Apnea</span>.
              Irregular respiration rate and breathing patterns form a major
              symptom for various{" "}
              <span className="text-[rgb(225,29,73)] italic">
                respiratory infections, metabolic and neurological disorders
              </span>{" "}
              . Monitoring respiration can provide early insights to diagnose
              these symptoms.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How are we solving the problem?</AccordionTrigger>
            <AccordionContent className="text-base">
              <ol className="list-decimal list-inside">
                <li>
                  Amplify video to enhance subtle movements that indicate
                  respiratory activity such as chest and abdominal movement
                </li>
                <li>
                  Use RAFT to estimate motion field from consecutive frames from
                  the input video
                </li>
                <li>
                  Extract freatures from Optical Flow field, that captures
                  characteristics of respiratory motion
                </li>
                <li>
                  Regularity of respiratory motion can be assessed by analyzing
                  the temporal consistency of Optical Flow pattern
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
