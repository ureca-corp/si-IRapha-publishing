import { useMouseDragTracking } from "../../../../hooks/useMouseDragTracking.js";
import { createElementFromHTML } from "../../../../utils/dom/CreateElementFromHTML.js";
import {
  Button,
  createCheckBox,
  createLabelWith,
  createRadioButton,
  createTextInput,
} from "../../../kit/index.js";
import { LayerPopupTemplate, PopupAppbar } from "../base/index.js";

const Selectors = {
  Form: "irapha-export-dicom__form",
  ContentContainer: "irapha-export-dicom__content",

  ContentFirstList: "irapha-export-dicom__content-first",
  ContentSecondList: "irapha-export-dicom__content-second",
  ContentThirdList: "irapha-export-dicom__content-third",

  ContentTitle: "irapha-export-dicom__content-title",
  ContentList: "irapha-export-dicom__content-list",
};

export class ExportDicomLayerPopup extends LayerPopupTemplate {
  #open$;

  constructor({ open$ }) {
    const $appbar = new PopupAppbar({
      title: "Export DICOM AS",
      onClose: () => this.#handleClose(),
    }).getEl();

    const $form = new FormComp();
    const $footer = new Footer({
      onCancel: () => this.#handleClose(),
      onSubmit: () => alert("Todo Export"),
    });

    super({
      open$,
      $top: $appbar,
      $body: $form,
      $bottom: $footer,
    });

    this.#open$ = open$;

    useMouseDragTracking({ $emitter: $appbar, $target: this.getEl() });
  }

  #handleClose() {
    this.#open$.next(null);
  }
}

// components
function ContentFirstListComp() {
  const InputName = "file-format";

  const inputModels = [
    {
      title: "DICOM (.dcm)",
      value: "DICOM",
      checked: true,
      onChange: (e) => {},
    },
    {
      title: "JPEG (.jpg)",
      value: "JPEG",
      onChange: (e) => {},
    },
    {
      title: "GIF (.gif)",
      value: "GIF",
      onChange: (e) => {},
    },
    {
      title: "PNG (.png)",
      value: "PNG",
      onChange: (e) => {},
    },
    {
      title: "JP2 (.jp2)",
      value: "JP2",
      onChange: (e) => {},
    },
    {
      title: "NRRD (.nrrd) - Zipped",
      value: "NRRD",
      onChange: (e) => {},
    },
    {
      title: "SPM2/Analyze (.nil)",
      value: "SPM2",
      onChange: (e) => {},
    },
    {
      title: "SPM5/NIfTI (.nil)",
      value: "SPM5",
      onChange: (e) => {},
    },
    {
      title: "Multiframe NRRD (.nrrd) - Zipped",
      value: "Multiframe NRRD",
      onChange: (e) => {},
    },
    {
      title: "Multiframe SPM2/Analyze (.nil)",
      value: "Multiframe SPM2",
      onChange: (e) => {},
    },
    {
      title: "Multiframe SPM5/NIfTI (.nil)",
      value: "Multiframe SPM5",
      onChange: (e) => {},
    },
  ];

  const $inputs = inputModels.map(({ title, value, checked, onChange }) =>
    createLabelWith({
      title,
      $input: createRadioButton({
        name: InputName,
        value,
        checked,
        onChange,
      }),
    })
  );

  const $contentFirstList = createElementFromHTML(`
  <div class="${Selectors.ContentFirstList}">
    <div class="${Selectors.ContentTitle}">
      File Format
    </div>

    <div class="${Selectors.ContentList}"></div>
  </div>
  `);

  $contentFirstList
    .querySelector(`.${Selectors.ContentList}`)
    .append(...$inputs);

  return $contentFirstList;
}

function ContentSecondListComp() {
  const $inputs = [
    createCheckboxLabelWithTextField({
      title: "Prefix",
      onCheckedChange: (e) => {},
      onTextChange: (e) => {},
    }),
    createLabelWith({
      title: "Include Patient ID",
      $input: createCheckBox({
        onChange: (e) => {},
      }),
    }),
    createLabelWith({
      title: "Include Accession Number",
      $input: createCheckBox({
        onChange: (e) => {},
      }),
    }),
    createLabelWith({
      title: "Include Study Instance UID",
      $input: createCheckBox({
        onChange: (e) => {},
      }),
    }),
    createLabelWith({
      title: "Include Modality",
      $input: createCheckBox({
        onChange: (e) => {},
      }),
    }),
    createLabelWith({
      title: "Include Series Number",
      $input: createCheckBox({
        onChange: (e) => {},
      }),
    }),
    createLabelWith({
      title: "Include Series Intance UID",
      $input: createCheckBox({
        onChange: (e) => {},
      }),
    }),
    createLabelWith({
      title: "Include Instance Number",
      $input: createCheckBox({
        onChange: (e) => {},
      }),
    }),
    createLabelWith({
      title: "Include SOP Instance UID",
      $input: createCheckBox({
        checked: true,
        disabled: true,
        onChange: (e) => {},
      }),
      disabled: true,
    }),
  ];

  const $contentSecondList = createElementFromHTML(`
  <div class="${Selectors.ContentSecondList}">
    <div class="${Selectors.ContentTitle}">
      Filename Format
    </div>

    <div class="${Selectors.ContentList}"></div>
  </div>
  `);

  $contentSecondList
    .querySelector(`.${Selectors.ContentList}`)
    .append(...$inputs);

  return $contentSecondList;
}

function ContentThirdListComp() {
  const $contentThirdList = createElementFromHTML(`
  <div class="${Selectors.ContentThirdList}">
    <div class="${Selectors.ContentTitle}">ETC</div>
    <div class="${Selectors.ContentList}"></div>
  </div>
  `);

  const $contentListContainer = $contentThirdList.querySelector(
    `.${Selectors.ContentList}`
  );

  $contentListContainer.appendChild(
    createLabelWith({
      title: "Export Image Annotations",
      $input: createCheckBox({
        onChange: (e) => {},
      }),
    })
  );

  return $contentThirdList;
}

function FormComp() {
  const $form = createElementFromHTML(
    `<form class="${Selectors.Form}" onsubmit="return false">
      <div class="${Selectors.ContentContainer}"></div>
    </form>`
  );

  const $contentContainer = $form.querySelector(
    `.${Selectors.ContentContainer}`
  );

  $contentContainer.append(
    ...[
      new ContentFirstListComp(),
      new ContentSecondListComp(),
      new ContentThirdListComp(),
    ]
  );

  return $form;
}

function Footer({ onCancel, onSubmit }) {
  const $footer = createElementFromHTML(
    `<div class="irapha-export-dicom__footer"></div>`
  );

  $footer.append(
    ...[
      new Button({
        label: "Cancel",
        variant: "outlined",
        onClick: onCancel,
      }),
      new Button({
        label: "Export",
        variant: "contained",
        onClick: onSubmit,
      }),
    ]
  );

  return $footer;
}

const createCheckboxLabelWithTextField = ({
  title,
  onCheckedChange,
  onTextChange,
}) => {
  const $label = createElementFromHTML(`<label></label>`);
  const $checkbox = createCheckBox({
    onChange: onCheckedChange,
  });
  const $title = createElementFromHTML(`<span>${title}</span>`);
  const $input = createTextInput({ onChange: onTextChange });

  $label.append(...[$checkbox, $title, $input]);

  return $label;
};
