import React, {useState} from 'react'
import styled from 'styled-components'
import {Button, LineHorizon, Empty} from './index'

const StyledContent = styled.div`
  position: absolute;
  padding-bottom: 15px;
  background-color: #fff;
  width: 100%;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`

const StyledItem = styled.div`
    margin-top: 15px;
    margin-left: 20px;
`

const DropdownMenu = () => {
    const [isShowMenu, setIsShowMenu] = useState(false)

    const onPress = () => {
        setIsShowMenu(!isShowMenu)
    }

    return <div>
        <Button
            onClick={onPress}>
            Dropdown
        </Button>
        {isShowMenu
            ? <StyledContent>
                <StyledItem>Menu 1</StyledItem>
                <StyledItem>Menu 2</StyledItem>
                <Empty style={{width: '100%', height: '15px'}} />
                <LineHorizon />
                <StyledItem>Menu 3</StyledItem>
            </StyledContent>
            : null}
    </div>
}

export default DropdownMenu