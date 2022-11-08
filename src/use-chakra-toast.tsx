import { createStandaloneToast, RenderProps } from "@chakra-ui/react";
import type { IInlineNotificationProps } from "@lego/klik-ui";
import { CloseButton, InlineNotification } from "@lego/klik-ui";

export type NotificationProps = {
  title: string;
  description: string;
} & IInlineNotificationProps;

type NavigationStateProps = {
  error?: {
    title: string;
    message: string;
  };
  success?: {
    title: string;
    message: string;
  };
};

export function useChakraToast() {
  const toast = createStandaloneToast();

  function showNotification({
    title,
    description,
    ...props
  }: NotificationProps) {
    toast({
      position: "top-right",
      duration: 5000,
      render: ({ onClose }: RenderProps) => (
        <InlineNotification {...props}>
          <InlineNotification.Content
            alignItems="flex-start"
            flexDirection="column"
          >
            <InlineNotification.Title>{title}</InlineNotification.Title>
            <InlineNotification.Description>
              {description}
            </InlineNotification.Description>
          </InlineNotification.Content>
          <CloseButton aria-label="" onClick={onClose} />
        </InlineNotification>
      ),
    });
  }

  return { showNotification };
}
