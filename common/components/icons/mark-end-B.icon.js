import { BaseIcon } from "./base/icon.js";

export class MarkEndBIcon extends BaseIcon {
  constructor({ element, isActive$, onClick }) {
    super({ element, isActive$, onClick });
    element.innerHTML = svgIcon;
  }
}

const svgIcon = `
<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_101_26)">
<path d="M12.0391 10.0122H9.33643L9.32178 8.87695H11.7754C12.1807 8.87695 12.5347 8.80859 12.8374 8.67188C13.1401 8.53516 13.3745 8.33984 13.5405 8.08594C13.7114 7.82715 13.7969 7.51953 13.7969 7.16309C13.7969 6.77246 13.7212 6.45508 13.5698 6.21094C13.4233 5.96191 13.1963 5.78125 12.8887 5.66895C12.5859 5.55176 12.2002 5.49316 11.7314 5.49316H9.65137V15H8.23779V4.33594H11.7314C12.2783 4.33594 12.7666 4.39209 13.1963 4.50439C13.626 4.61182 13.9897 4.78271 14.2876 5.01709C14.5903 5.24658 14.8198 5.53955 14.9761 5.896C15.1323 6.25244 15.2104 6.67969 15.2104 7.17773C15.2104 7.61719 15.0981 8.01514 14.8735 8.37158C14.6489 8.72314 14.3364 9.01123 13.936 9.23584C13.5405 9.46045 13.0767 9.60449 12.5444 9.66797L12.0391 10.0122ZM11.9731 15H8.77979L9.57812 13.8501H11.9731C12.4224 13.8501 12.8032 13.772 13.1157 13.6157C13.4331 13.4595 13.6748 13.2397 13.8408 12.9565C14.0068 12.6685 14.0898 12.3291 14.0898 11.9385C14.0898 11.543 14.019 11.2012 13.8774 10.9131C13.7358 10.625 13.5137 10.4028 13.2109 10.2466C12.9082 10.0903 12.5176 10.0122 12.0391 10.0122H10.0249L10.0396 8.87695H12.7935L13.0938 9.28711C13.6064 9.33105 14.041 9.47754 14.3975 9.72656C14.7539 9.9707 15.0249 10.2832 15.2104 10.6641C15.4009 11.0449 15.4961 11.4648 15.4961 11.9238C15.4961 12.5879 15.3496 13.1494 15.0566 13.6084C14.7686 14.0625 14.3608 14.4092 13.8335 14.6484C13.3062 14.8828 12.686 15 11.9731 15Z" />
<path d="M8.42 20.5C8.22 20.0733 8.02667 19.7 7.84 19.38C7.64 19.06 7.44667 18.7933 7.26 18.58H18.92V17.74H7.26C7.44667 17.5133 7.64 17.24 7.84 16.92C8.02667 16.6 8.22 16.2333 8.42 15.82H7.72C6.88 16.7933 6 17.5133 5.08 17.98V18.34C6 18.7933 6.88 19.5133 7.72 20.5H8.42Z" />
</g>
</svg>
`;
