import { Box } from "@/UI/Box";
import { Text } from "@/UI/Text";
import { Heading } from "@/UI/Heading";
import { Image } from "@/UI/Image";
import { To } from "@/UI/To";

export const CardMin = ({
  title,
  disc,
  date,
  url,
}: {
  title: string;
  disc: string | null;
  date: string;
  url: string;
}) => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1200px",
        "&:not(:first-child)": {
          padding: "1rem 0",
        },
        "&:first-child": {
          paddingBottom: "1rem",
        },
      }}
    >
      <Text
        css={{
          display: "flex",
          padding: "0.5rem 0",
          fontSize: "10pt",
          color: "rgba(0, 0,0 , 0.5)",
          fontWeight: "500",
        }}
      >
        {new Date(date).toLocaleTimeString("ru", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        })}
      </Text>
      <Heading size="h3">{title}</Heading>
      {disc && (
        <Text
          css={{
            padding: "1rem 0",
            ol: {
              padding: "0",
              li: {
                "&::marker": {
                  content: "•  ",
                  marginRigth: "1rem",
                },
              },
            },
          }}
          dangerouslySetInnerHTML={{ __html: disc }}
        ></Text>
      )}
      <To
        href={url}
        style="primary"
        css={{
          fontSize: "10pt",
        }}
      >
        Узнать подробнее
      </To>
    </Box>
  );
};

export const CardBig = ({
  src,
  title,
  disc,
  date,
  url,
}: {
  src?: string | null;
  title: string;
  disc: string | null;
  date: string;
  url: string;
}) => {
  return (
    <Box
      css={{
        maxWidth: "600px",
        "&:not(:first-child)": {
          padding: "1rem 0",
        },
        "&:first-child": {
          paddingBottom: "1rem",
        },
      }}
    >
      <Image src={src} />
      <Text
        css={{
          display: "flex",
          padding: "0.5rem 0",
          fontSize: "10pt",
          color: "rgba(0, 0,0 , 0.5)",
          fontWeight: "500",
        }}
      >
        {new Date(date).toLocaleTimeString("ru", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        })}
      </Text>
      <Heading size="h2">{title}</Heading>
      <Text
        css={{
          display: "flex",
          paddingTop: "0.75rem",
          fontSize: "11pt",
          color: "rgba(0, 0,0 , 0.75)",
        }}
      >
        {disc}
      </Text>
      <To href={url} style="primary">
        Узнать подробнее
      </To>
    </Box>
  );
};
