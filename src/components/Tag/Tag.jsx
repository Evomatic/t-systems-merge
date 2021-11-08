import React from "react";
import PropTypes from "prop-types";
import { ScaleTag } from "@telekom/scale-components-react";

function TagM(props) {
    return (
      <ScaleTag {...props} href={`https://${props.href}`}>
        {props.children}
      </ScaleTag>
    )
  }

TagM.propTypes = {
/**
 * Works
 */
variant: PropTypes.oneOf(['secondary']),

/**
 * Works
 */
size: PropTypes.oneOf(['small']),

/**
 * Works
 */
disabled: PropTypes.bool,

/**
 * Works
 */
dismissable: PropTypes.bool,

/**
 * Works
 */
dismissText: PropTypes.string,

/**
 * Not sure if Works
 */
target: PropTypes.string,

/**
 * Works
 */
children: PropTypes.string,

/**
 * Works
 */
href: PropTypes.string,
}

export { TagM as default }