<script lang="ts">
  import { createPdf } from "./create-pdf";
  import { debounce } from "./debounce";

  let lineLength = "50";
  let pdfDataUri;

  $: debounce(
    () => createPdf(Number(lineLength)).then((result) => (pdfDataUri = result)),
    500
  )();
</script>

<label>
  Line length:
  <input bind:value={lineLength} />
</label>

<iframe id="pdf" title="pdf" src={pdfDataUri} />

<style>
  #pdf {
    width: 100%;
    height: 600px;
  }
</style>
