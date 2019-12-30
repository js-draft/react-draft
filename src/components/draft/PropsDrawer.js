import React, { useContext } from 'react'
import { css } from '@emotion/core'
import getInput from '../../lib/get-input'
// import ChildrenInput from '../Inputs/ChildrenInput'
import { H2 } from '../common/Headers'
import { SelectedContext } from '../contexts/SelectedContext'
import ResetIcon from '../../svgs/ResetIcon'
import IconButton from '../common/IconButton'

const propsDrawerCss = css`
  padding: 16px 16px 0 16px;
`

const styles = {
  propsContainer: css`
    display: grid;
    grid-row-gap: 8px;
  `,
  propsDrawer: css`
    overflow-y: scroll;
    height: 100%;
  `,
}

const propsTitleCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const noPropsCss = css`
  font-size: 12px;
  padding: 32px 0;
  text-align: center;
  text-transform: uppercase;
`

export default function PropsDrawer({ propObjects }) {
  if (!propObjects) return <div css={noPropsCss}>No props available</div>

  const { SelectedComponent, propStates, resetToDefaults, updatePropState } = useContext(
    SelectedContext
  )

  const entries = Object.entries(propObjects)

  const inputs = entries.reduce(
    (acc, [propName, propInfo]) => {
      if (!propInfo) return acc
      if (!propInfo.type) {
        acc.missingPropTypes.push([propName, propInfo])
        return acc
      }
      if (!acc[propInfo.type.name]) acc[propInfo.type.name] = []
      acc[propInfo.type.name].push([propName, propInfo])
      return acc
    },
    {
      missingPropTypes: [],
    }
  )

  function getInputProp(entry) {
    return getInput(entry, propStates, updatePropState)
  }

  return (
    <div css={propsDrawerCss}>
      <div css={propsTitleCss}>
        <H2>{SelectedComponent.meta.displayName} Props</H2>
        <IconButton
          title="Reset all props to default values"
          Icon={ResetIcon}
          onClick={resetToDefaults}
        />
      </div>
      <div css={styles.propsDrawer} className="demo-font">
        <div css={styles.propsContainer}>
          {/* <ChildrenInput value={propStates.children} setEditItem={setEditItem} /> */}
          {inputs.string && inputs.string.map(getInputProp)}
          {inputs.number && inputs.number.map(getInputProp)}
          {inputs.enum && inputs.enum.map(getInputProp)}
          {inputs.object && inputs.object.map(getInputProp)}
          {inputs.array && inputs.array.map(getInputProp)}
          {inputs.shape && inputs.shape.map(getInputProp)}
          {inputs.exact && inputs.exact.map(getInputProp)}
          {inputs.func && inputs.func.map(getInputProp)}
          {inputs.bool && inputs.bool.map(getInputProp)}
        </div>
      </div>
    </div>
  )
}
