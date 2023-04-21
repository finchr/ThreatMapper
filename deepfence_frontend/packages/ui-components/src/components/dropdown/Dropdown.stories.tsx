import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import {
  HiArrowRight,
  HiInboxIn,
  HiInformationCircle,
  HiLogout,
  HiPencilAlt,
  HiUserAdd,
} from 'react-icons/hi';

import Button from '@/components/button/Button';
import {
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  DropdownSubMenu,
} from '@/components/dropdown/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    align: {
      defaultValue: undefined,
      options: [undefined, 'start', 'center', 'end'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Dropdown>;

const DefaultTemplate: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown
      {...args}
      content={
        <>
          <DropdownItem>First Action</DropdownItem>
          <DropdownItem>Second Action</DropdownItem>
          <DropdownItem>Third Action</DropdownItem>
          <DropdownItem>Fourth Action</DropdownItem>
          <DropdownSeparator />
          <DropdownItem className="text-red-500 dark:text-red-500">Sign Out</DropdownItem>
        </>
      }
    >
      <Button color="primary">Click me</Button>
    </Dropdown>
  );
};

export const Default = {
  render: DefaultTemplate,

  args: {
    triggerAsChild: true,
  },
};

const TemplateForIcons: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown
      {...args}
      content={
        <>
          <DropdownItem>
            <IconContext.Provider value={{ size: '18px' }}>
              <HiUserAdd />
            </IconContext.Provider>
            <span>First Action</span>
          </DropdownItem>
          <DropdownItem>
            <IconContext.Provider value={{ size: '18px' }}>
              <HiInboxIn />
            </IconContext.Provider>
            <span>Second Action</span>
          </DropdownItem>
          <DropdownItem>
            <IconContext.Provider value={{ size: '18px' }}>
              <HiInformationCircle />
            </IconContext.Provider>
            <span>Third Action</span>
          </DropdownItem>
          <DropdownItem>
            <IconContext.Provider value={{ size: '18px' }}>
              <HiPencilAlt />
            </IconContext.Provider>
            <span>Fourth Action</span>
          </DropdownItem>
          <DropdownSeparator />
          <DropdownItem className="text-red-500 dark:text-red-500">
            <IconContext.Provider value={{ size: '18px' }}>
              <HiLogout />
            </IconContext.Provider>
            <span>Sign Out</span>
          </DropdownItem>
        </>
      }
    >
      <Button color="primary">Click me</Button>
    </Dropdown>
  );
};

export const WithIcons = {
  render: TemplateForIcons,

  args: {
    triggerAsChild: true,
  },
};

const ControlledTemplate: StoryFn<typeof Dropdown> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown
      {...args}
      open={open}
      loop
      onOpenChange={(open) => {
        setOpen(open);
      }}
      content={
        <>
          <DropdownItem>First Action</DropdownItem>
          <DropdownItem>Second Action</DropdownItem>
          <DropdownItem>Third Action</DropdownItem>
          <DropdownItem>Fourth Action</DropdownItem>
          <DropdownSubMenu
            triggerAsChild
            content={
              <>
                <DropdownItem>Mask this</DropdownItem>
                <DropdownItem>Mask across</DropdownItem>
              </>
            }
          >
            <DropdownItem className="text-blue-500 dark:blue-red-500">
              <span>More</span>
              <IconContext.Provider value={{ size: '18px' }}>
                <HiArrowRight />
              </IconContext.Provider>
            </DropdownItem>
          </DropdownSubMenu>
          <DropdownSeparator />
          <DropdownItem className="text-red-500 dark:text-red-500">Sign Out</DropdownItem>
        </>
      }
    >
      <Button color="primary">Click me</Button>
    </Dropdown>
  );
};

export const Controlled = {
  render: ControlledTemplate,

  args: {
    triggerAsChild: true,
  },
};
