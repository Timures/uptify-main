<template>
    <button class="navBtn">
        <div class="navBtn_icon">
            <span></span>
            <span></span>
        </div>
    </button>
</template>

<style lang="scss" scoped>
.navBtn {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 100%;
    box-shadow: none;
    border: none;
    background: linear-gradient(315deg, rgba(51, 123, 190, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%, rgba(51, 123, 190, 0.00) 100%), rgba(255, 255, 255, 0.08);

    &_icon {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;

        span {
            width: 28px;
            height: 2px;
            background-color: #fff;

            &:last-child {
                width: 18px;
                margin-top: 6px;
            }
        }
    }

}</style>