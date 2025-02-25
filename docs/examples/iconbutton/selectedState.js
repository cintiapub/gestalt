// @flow strict
import { type Node as ReactNode, useRef, useState } from 'react';
import { Box, Dropdown, Flex, IconButton } from 'gestalt';

export default function Example(): ReactNode {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<
    $ReadOnlyArray<{ label: string, subtext?: string, value: string }>,
  >([]);
  const anchorRef = useRef<null | HTMLButtonElement | HTMLAnchorElement>(null);

  const onSelect = ({
    item,
  }: {
    event: SyntheticInputEvent<HTMLInputElement>,
    item: { label: string, subtext?: string, value: string },
  }) => {
    if (selected.some(({ value }) => value === item.value)) {
      setSelected((selectedValue) => selectedValue.filter(({ value }) => value !== item.value));
    } else {
      setSelected((selectedValue) => [...selectedValue, item]);
    }
  };

  return (
    <Box padding={4}>
      <Flex width="100%" justifyContent="center">
        <IconButton
          accessibilityControls="sections-dropdown-example"
          accessibilityExpanded={open}
          accessibilityHaspopup
          accessibilityLabel="Create Pin Menu"
          bgColor="lightGray"
          icon="add"
          iconColor="darkGray"
          onClick={() => setOpen((prevVal) => !prevVal)}
          ref={anchorRef}
          selected={open}
          size="lg"
          tooltip={{
            text: 'Create',
            accessibilityLabel: '',
            idealDirection: 'up',
          }}
        />
        {open && (
          <Dropdown
            anchor={anchorRef.current}
            id="sections-dropdown-example"
            onDismiss={() => setOpen(false)}
          >
            <Dropdown.Section label="Create">
              <Dropdown.Item
                onSelect={onSelect}
                option={{ value: 'Pin', label: 'Pin' }}
                selected={selected}
              />
              <Dropdown.Item
                onSelect={onSelect}
                option={{ value: 'Story Pin', label: 'Story Pin' }}
                selected={selected}
              />
            </Dropdown.Section>
            <Dropdown.Section label="Add">
              <Dropdown.Item
                badge={{ text: 'New' }}
                onSelect={onSelect}
                option={{ value: 'Note', label: 'Note' }}
                selected={selected}
              />
            </Dropdown.Section>
          </Dropdown>
        )}
      </Flex>
    </Box>
  );
}
