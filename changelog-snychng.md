# 代码变更日志

## 修改内容

### 文件路径: `/Users/snychng/Work/code/lobe-chat-lj/src/app/[variants]/(main)/settings/hooks/useCategory.tsx`

#### 删除的代码
```typescript
        showLLM &&
          (isDeprecatedEdition
            ? {
                icon: <Icon icon={Brain} />,
                key: SettingsTabs.LLM,
                label: (
                  <Link href={'/settings/llm'} onClick={(e) => e.preventDefault()}>
                    {t('tab.llm')}
                  </Link>
                ),
              }
            : {
                icon: <Icon icon={Brain} />,
                key: SettingsTabs.Provider,
                label: (
                  <Link href={'/settings/provider'} onClick={(e) => e.preventDefault()}>
                    {t('tab.provider')}
                  </Link>
                ),
              }),
        {
          icon: <Icon icon={Bot} />,
          key: SettingsTabs.Agent,
          label: (
            <Link href={'/settings/agent'} onClick={(e) => e.preventDefault()}>
              {t('tab.agent')}
            </Link>
          ),
        },
        {
          icon: <Icon icon={Mic2} />,
          key: SettingsTabs.TTS,
          label: (
            <Link href={'/settings/tts'} onClick={(e) => e.preventDefault()}>
              {t('tab.tts')}
            </Link>
          ),
        },
```

这些变更主要涉及设置页面的导航菜单项，移除了与 LLM、Agent、TTS 相关的设置选项。

### 修改说明

1. 移除了 LLM 设置选项卡，包括旧版和新版两种展示方式
2. 移除了 Agent 设置选项卡
3. 移除了 TTS（文本转语音）设置选项卡
4. 简化了设置页面的导航菜单结构

这些修改旨在精简设置界面，移除了一些特定功能的配置选项，使界面更加简洁。