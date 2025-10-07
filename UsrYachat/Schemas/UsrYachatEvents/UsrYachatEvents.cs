namespace Terrasoft.Configuration
{
    using System;
    using Terrasoft.Common;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;

    [EntityEventListener(SchemaName = "UsrYachat")]
    public class YachatEntityEventListener : BaseEntityEventListener
    {
        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            Entity yachat = (Entity)sender;
            decimal price = yachat.GetTypedColumnValue<decimal>("UsrPrice");
            if (price > 1000000)
            {
                e.IsCanceled = true;

                string messageTemplate = new LocalizableString(yachat.UserConnection.ResourceStorage,
                    "UsrYachatEvents", "LocalizableStrings.ValueIsTooBig.Value").ToString();

                string message = string.Format(messageTemplate, "1 000 000 USD");
                throw new Exception(message);
            }
        }
    }
}
