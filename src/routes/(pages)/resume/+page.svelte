<script>
  import LinkButton from "../../../components/LinkButton.svelte";
  import resumeImage from "../../../AdamEmerson_ResumeOct22.png";
  import resumePDF from "../../../AdamEmerson_Resume.pdf";
  import {IconDownload} from "@tabler/icons-svelte";
</script>

<div class="h-screen w-full z-50">
    <LinkButton text="PDF" route={resumePDF} icon={IconDownload} />
    <div class="h-full my-4 flex justify-start relative">
        <div>
            <img alt="resume" src={resumeImage} type="application/pdf" class="w-fit h-fit"/>
        </div>
    </div>
</div>