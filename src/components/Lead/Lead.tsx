import { LeadVideo, LeadVideoBg, LeadWrapper } from "./Lead.styled";


const Lead = () => {
  return(
  <LeadWrapper>
    <LeadVideoBg>
      <LeadVideo autoPlay muted>
        <source src="/videos/lead-bg.mp4" type="video/mp4"/>
      </LeadVideo>
    </LeadVideoBg>
  </LeadWrapper>
  );
}

export default Lead;