import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

export default function TabContainer({tab1, tab2, tab3}) {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs defaultValue="si">
      <Tabs.List>
        <Tabs.Tab value="si" leftSection={<IconPhoto style={iconStyle} />}>
          Simple Interest Calculate
        </Tabs.Tab>
        <Tabs.Tab value="ci" leftSection={<IconMessageCircle style={iconStyle} />}>
          Compound Interest Calculate
        </Tabs.Tab>
        <Tabs.Tab value="todo" leftSection={<IconSettings style={iconStyle} />}>
          TODO plan list
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="si">
        {tab1}
      </Tabs.Panel>

      <Tabs.Panel value="ci">
        {tab2}
      </Tabs.Panel>

      <Tabs.Panel value="todo">
        {tab3}
      </Tabs.Panel>
    </Tabs>
  );
}